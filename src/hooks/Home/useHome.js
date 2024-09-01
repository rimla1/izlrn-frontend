import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useHome = () => {
    const navigate = useNavigate()
    const language = useSelector((store) => store.language)
    const handleStartQuizClick = () => {
        navigate("/quiz")
    }

    return [handleStartQuizClick, language]
}