import { Dispatch } from "react";
import { AlbumsRespository } from "../repository/albums_repository";

export namespace AlbumsThunk {

    export const getAlbums = () => async (dispatch: Dispatch<any>) => {
        try {
            dispatch({ type: "FETCH_ALBUMS_INIT" });

            const [albums, error] = await AlbumsRespository.getTopAlbums();
            if (error === null) {
                dispatch({ type: "FETCH_ALBUMS_SUCCESS", payload: albums });
            } else {
                dispatch({ type: "FETCH_ALBUMS_FAILURE", payload: error });
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: "FETCH_ALBUMS_FAILURE", payload: "An error occurred" });
        }
    }

}