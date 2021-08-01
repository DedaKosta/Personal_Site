import React from 'react'

const ProjectsMenu = (props) => {
    return (
        <div className='project-category-cont' value={props.name} onClick={() => props.onSelect(props.name)}>
            <p className='project-category'>{props.name}</p>
        </div>
    )
}

export default ProjectsMenu
