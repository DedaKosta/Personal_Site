import React from 'react'
import { useState } from 'react'
import ProjectsMenu from './ProjectsMenu'
import '../App.css'

const Projects = () => {

    const [curClass, setClass] = useState("categories-names-cont");

    const [projects] = useState(
        {
            'Vanilla Web Apps': {
                'Sudoku App': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'A simple sudoku application. (Individual work)'
                },
                'Dota App': {
                    'link': 'https://github.com/DedaKosta/Dota_App',
                    'description': 'An app for viewing all dota2 heroes and their basic stats. (Individual work)'
                },
                'Password Generator': {
                    'link': 'https://github.com/DedaKosta/Password_Generator',
                    'description': 'A simple password generator application using Node.js. (Individual work)'
                }
            },
            'React Apps': {
                'Calendar App': {
                    'link': 'https://github.com/DedaKosta/Calendar_App',
                    'description': 'A simple task app. (Individual work)'
                },
                'Dota App': {
                    'link': 'https://github.com/DedaKosta/Dota_App_React',
                    'description': 'Rewritten vanilla dota app using react. (Individual work)'
                },
                'Games App': {
                    'link': 'https://github.com/DedaKosta/Games_App',
                    'description': 'A games schedule app. (Individual work)'
                },
                'Lucky Six': {
                    'link': 'https://github.com/DedaKosta/Lucky_Six',
                    'description': 'Maxbet lucky six game app. (Individual work)'
                }
            },
            '.NET Projects': {
                'Lako do Stana (SQL)': {
                    'link': 'https://github.com/DedaKosta/Lako_Do_Stana_SQL',
                    'description': 'A complex project for searching apartments and roommates using SQL database. (Work in team)'
                },
                'Lako do stana (MongoDB)': {
                    'link': 'https://github.com/DedaKosta/Lako_Do_Stana_MongoDB',
                    'description': 'A complex project for searching apartments and roommates using MOngoDB database. (Work in team)'
                },
                'Score Mania': {
                    'link': 'https://github.com/DedaKosta/ScoreMania',
                    'description': 'Application for games results and schedule. using Neo4J database. (Work in team)'
                },
                'Tickets4You': {
                    'link': 'https://github.com/DedaKosta/Tickets4You',
                    'description': 'An application for reservations using Cassandra database. (Work in team)'
                }
            },
            'Python Projects': {
                'Shape Detector': {
                    'link': 'https://github.com/DedaKosta/Shape_Detector',
                    'description': 'Application for detecting shapes on a picture. (Individual work)'
                },
                'Panorama App': {
                    'link': 'https://github.com/DedaKosta/Panorama_App',
                    'description': 'An application for making a panoramic image from set of images. (Individual work)'
                },
                'Face Detector App': {
                    'Face Detector App': 'https://github.com/DedaKosta/Face_Detectior_Python',
                    'description': 'An application for detecting facial features. (Individual work)'
                },
                'Animals Detector App': {
                    'link': 'https://github.com/DedaKosta/Animals_Detector_Python',
                    'description': 'An application for detection animals on a picture with sliding window technique. (Individual work)'
                },
                'Aruco Detector': {
                    'link': 'https://github.com/DedaKosta/Aruco_Detector',
                    'description': 'Application for detecting aruco shapes and their labeling. (Individual work)'
                }
            }
        })

    const [selectedCategory, setSelectedCategory] = useState('Vanilla Web Apps')

    const keys = Object.keys(projects)

    const toggle = () => {
        if (curClass === "categories-names-cont") {
            setClass(curClass + " responsive2");
        } else {
            setClass("categories-names-cont");
        }
    };

    const setCategory = (category) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <div className='project-categories-cont'>
                <div className={curClass}>
                    {
                        keys.map((key) => (
                            <ProjectsMenu key={key} name={key} onSelect={setCategory} />
                        ))
                    }
                    <div className="icon" onClick={toggle}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>

            <div className='projects-list'>
                {
                    Object.keys(projects[selectedCategory]).map((project_key) => (
                        <div className='project' key={project_key}>
                            <div className='project-name-cont'>
                                <p className='project-name'>{project_key}</p>
                            </div>
                            <div className='project-description-cont'>
                                <p className='project-description'>{projects[selectedCategory][project_key]['description']}</p>
                            </div>
                            <div className='project-relocate-cont'>
                                <a className='project-relocate' href={projects[selectedCategory][project_key]['link']}>Link</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Projects
