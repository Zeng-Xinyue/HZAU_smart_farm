import './main.scss'
import MainSpan1 from './mainSpan1.jsx'
import ExpertsRecommend from './expertsRecommend.jsx';
import HotQuestions from './hotQuestions.jsx';
import KnowledgePopularization from './knowledgePopularization.jsx'

function Main(){
    return (
        <div className="P-main">
                <MainSpan1></MainSpan1>
                <ExpertsRecommend></ExpertsRecommend>
                <HotQuestions></HotQuestions>
                <KnowledgePopularization></KnowledgePopularization>
        </div>
    )
}

export default Main;