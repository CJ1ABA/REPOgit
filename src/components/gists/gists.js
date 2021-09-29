import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../../store/gists/thunk";

export function Gists() {
    const { gists, gistsPending, gistsError } = useSelector((state) => state.gists)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!gists.length) {
            dispatch(getGists())
        }
    }, [dispatch, gists])

    if (gistsPending) {
        return <h1>PENDING...</h1>
    }
    if (gistsError) {
        return <h1>ooopps...error</h1>
    }
    return (
        <div>
            {Array.from({ length: 10 }).map((_, index) => (
                <button key={index} onClick={() => dispatch(getGists(index))}>
                    button{index + 1}
                </button>
            ))}
            <ul>
                {gists.map((gists, index) => (
                    <li key={index}> {gists.description} </li>
                ))}
            </ul>
        </div>
    )
}