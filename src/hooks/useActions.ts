import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { setNotes, setSearch, setSelected } from "../store/reducers/actions"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(
        {
            setNotes,
            setSearch,
            setSelected
        }
    , dispatch)
}