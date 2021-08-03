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
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Dota App': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                }
            },
            'React Apps': {
                'Calendar App': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Dota App': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Games App': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                }
            },
            'C# Projects': {
                'Project 1': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Project 2': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Project 3': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                }
            },
            'Python Projects': {
                'Project 1': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Project 2': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Project 3': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Project 4': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
                },
                'Project 5': {
                    'link': 'https://github.com/DedaKosta/Sudoku_App',
                    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum, consequatur, molestiae animi a laboriosam nisi saepe doloribus officia.'
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
