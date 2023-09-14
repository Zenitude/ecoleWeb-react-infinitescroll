import { useState } from "react";
import { HomeContainer, GlobalStyle } from "./Home.style";
import { StyleSheetManager } from "styled-components";
import { usePhotos } from "../../utils/hooks/usePhotos";
import Field from "../../components/Field/Field";
import Figures from "../../components/Figures/Figures";
import Loader from "../../components/Loader/Loader";

export default function Home () {
    const [ query, setQuery ] = useState("random");
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ perPage ] = useState(30);
    console.log(query)
    const { error, images, maxPages, loading } = usePhotos(query, pageNumber, perPage);

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
            <GlobalStyle />
            <HomeContainer>
                <h1>Photothèque</h1>
                <Field setQuery={setQuery} setPage={setPageNumber} />
                {
                    error.state
                    ? (<p>{error.msg}</p>)
                    : (
                        loading
                        ? (<Loader />)
                        : (images.length === 0
                            ? (<p>Aucune image n'a été trouvée pour votre recherche</p>)
                            : (<Figures images={images} maxPage={maxPages} page={pageNumber} setPage={setPageNumber} />)
                        )
                    )
                }
            </HomeContainer>
        </StyleSheetManager>
    )
}