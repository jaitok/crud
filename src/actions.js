import { db } from './firebase'
import {collection, getDocs, getDoc, addDoc, setDoc, doc, deleteDoc} from 'firebase/firestore'


export const getCollection = async(nameCollection) =>{
    const result = {statusResponse: false, data: null, error: null }
    try{
        const data = await getDocs(collection(db, nameCollection))
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        result.statusResponse =true
        result.data = arrayData
    }catch(error){
        console.log("getCollection: "+error)
        result.error = error 
    }

    return result
} 

export const addDocument = async (collectionData, dataTask) => {
    const result = {statusResponse: false,data:null,error:null }
    try {
        const response = await addDoc(collection(db,collectionData),dataTask);
        result.data = {id: response.id}; 
        result.statusResponse= true;
    } catch (error) {
        console.log("addDocument: "+error)
        result.error =error;
    }
    return result;
}

export const getDocument = async (collectionData, id) =>{
    const result = {statusResponse: false,data:null,error:null }
    try {
        const response = await getDoc(doc(db,collectionData,id)) 
        result.data = {id: response.id, ...response.data()}
        result.statusResponse= true;
    } catch (error) {
        console.log("getDocument: "+error)
        result.error =error;
    }
    return result;
}


export const updateDocument = async (collectionData, id, data) =>{
    const result = {statusResponse: false,data:null,error:null }
    try {
        await setDoc(doc(db, collectionData, id), data);
        result.statusResponse=true;
    } catch (error) {
        console.log("updateDocument: "+error)
        result.error =error;
    }
    return result;
}

export const deleteDocument = async (collectionData, id) =>{
    const result = {statusResponse: false,data:null,error:null }
    try {
        await deleteDoc(doc(db,collectionData,id)) 
        result.statusResponse= true;
    } catch (error) {
        console.log("getDocument: "+error)
        result.error =error;
    }
    return result;
}