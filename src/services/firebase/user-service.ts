import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { auth } from "./firebase-config";

export interface UserData {
  uid: string;
  username: string;
  email: string;
  role: string;
  createdAt: Date;
}

export const getAllUsers = async (): Promise<UserData[]> => {
  try {
    const usersCollection = collection(db, "users");
    const usersSnapshot = await getDocs(usersCollection);
    const users: UserData[] = [];

    usersSnapshot.forEach((doc) => {
      const data = doc.data();
      users.push({
        uid: doc.id,
        username: data.username,
        email: data.email,
        role: data.role,
        createdAt: data.createdAt?.toDate() || new Date(),
      });
    });

    return users;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
};

export const deleteUser = async (userId: string): Promise<boolean> => {
  try {
    // Primero eliminamos el documento de Firestore
    await deleteDoc(doc(db, "users", userId));

    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error("No hay usuario autenticado");
    }

    // Si el usuario a eliminar es el mismo que está autenticado, no permitir la eliminación
    if (userId === currentUser.uid) {
      throw new Error("No puedes eliminar tu propia cuenta desde aquí");
    }

    return true;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
};

export const updateUser = async (
  userId: string,
  userData: Partial<UserData>
): Promise<boolean> => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, userData, { merge: true });
    return true;
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    throw error;
  }
};
