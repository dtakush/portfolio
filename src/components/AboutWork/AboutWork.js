import React from 'react';

//Components
import AboutWorkCard from '../AboutWorkCard/AboutWorkCard';
import AboutSkillsCard from '../AboutSkillsCard/AboutSkillsCard';

function AboutWork(props) {

    return (
        <>
            <div className='about-work'>
                <div className='about-work_background-top'></div>
                <div className='about-work_background'>
                    <div className='about-work_tables'>

                        <div className='about-work_experience'>
                            <div className='about-work_years'>
                                <h3 className='about-work_header'>Где училась?</h3>
                                <div className='about-work_table'>
                                {props.studyCards.slice(0).map((item) => {
                                    return (
                                        <AboutWorkCard
                                        header={item.header}
                                        speciality={item.speciality}
                                        years={item.years}
                                        width={item.width}
                                        yearsWidth={item.yearsWidth}
                                        />
                                        )
                                    })}
                                </div>
                            </div>

                            <div className='about-work_years'>
                                <h3 className='about-work_header'>Где работала?</h3>
                                <div className='about-work_table'>
                                {props.workCards.slice(0).map((item) => {
                                    return (
                                        <AboutWorkCard
                                        header={item.header}
                                        speciality={item.speciality}
                                        years={item.years}
                                        width={item.width}
                                        yearsWidth={item.yearsWidth}
                                        />
                                        )
                                    })}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className='about-work_skills'>
                        <h3 className='about-work_header'>Что умею?</h3>
                        <div className='about-work_skills-table'>
                            {props.skillsCards.slice(0).map((item) => {
                                return (
                                    <AboutSkillsCard
                                    text={item.text}
                                    url={item.url}
                                    percent={item.percent}
                                    />
                                    )
                                })}
                        </div>
                    </div>

                </div>
                
                <div className='about-work_background-down'></div>
            </div>
            
        </>    
    )
}

export default AboutWork;

