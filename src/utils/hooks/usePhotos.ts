/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { ImageType } from "../types/types";

export const usePhotos = (query: string, page: number, perPage: number) => {
    const [error, setError ] = useState({
        msg: "",
        state: false
    });
    const [ images, setImages ] = useState<ImageType[]>([]);
    const [ maxPages, setMaxPages ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    
    useEffect(() => {
        if(images.length !== 0 && maxPages !== 0) {
            setImages([]);
            setMaxPages(0);
        }
    }, [query]);

    useEffect(() => {
        if(!accessKey) {
            console.error("ACCESS_KEY is not defined in import.meta.env");
            return;
        }
        fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${query}&client_id=${accessKey}`)
        .then(response => {
            if(!response.ok) throw new Error(`${response.status}, quelque chose s'est mal passé.`);
            return response.json()
        })
        .then(datas => {
            const {results, total_pages } = datas; 
            setImages(state => [...state, ...results]);
            setMaxPages(total_pages);
            setLoading(false);
        })
        .catch(error => {
            setError({
                msg: `${error}`,
                state: true
            })
        });
    }, [query, page, perPage]);

    return { error, images, maxPages, loading };
}