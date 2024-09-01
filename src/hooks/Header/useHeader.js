import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../redux/slices.js/languangeSlice'
import { changeTheme } from '../../redux/slices.js/themeSlice'

const useHeader = () => {
    const {isDarkModeOn} = useSelector((store) => store.theme)
    const language = useSelector((store) => store.language)
    const dispatch = useDispatch()
  
    const setTheme = () => {
      dispatch(changeTheme())
    }
  
    const selectChangeLanguageHandler = (language) => {
      dispatch(changeLanguage(language))
    }

    return [isDarkModeOn, language, setTheme, selectChangeLanguageHandler]
}

export default useHeader