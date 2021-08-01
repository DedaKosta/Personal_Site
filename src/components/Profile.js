import React from 'react'
import Address from './Address'
import Skill from './Skill'
import ProjectsMenu from './ProjectsMenu'
import mainPic from '../Pictures/main.png'
import { useState } from 'react'

const Profile = () => {

    const [selectedCategory, setSelectedCategory] = useState('About')

    const [information] = useState(
        {
            'Timeline': {
                '2013-2017': 'Srednja škola - Tehnička škola Pirot',
                '2017-NOW': 'Elektronski Fakultet - Niš'
            },
            'About': {
                'Contact information': {
                    'Phone': '+381 69 174 6655',
                    'Primary Address': 'Dimitrije Tucovića 30, Pirot, Srbija',
                    'E-mail': 'nikolajovanovic3579@gmail.com',
                    'Site': 'www.nikolajovanovic.com :)'
                },
                'Basic information': {
                    'Birthday': '9. June 1998',
                    'Gender': 'Male'
                }
            }
        }
    )

    const setCategory = (category) => {
        setSelectedCategory(category)
    }

    return (
        <div className='profile-cont'>
            <div className='left-profile'>
                <div className='profile-picture'>
                    <img src={mainPic} alt='profile_picture' />
                </div>
                <div className='separator'>
                    <p className='separator-text'>ADDRESS</p>
                </div>
                <div className='addresses-cont'>
                    <Address value='Dimitrije Tucivića 30, Pirot, Srbija' />
                    <Address value='Nikole Pašića 65/20, Niš, Srbija' />
                </div>
                <div className='separator'>
                    <p className='separator-text'>SKILLS</p>
                </div>
                <div className='skills-cont'>
                    <Skill value='Web Developer' />
                    <Skill value='Web Designer' />
                    <Skill value='Desktop Developer' />
                    <Skill value='Database Manager' />
                </div>
            </div>

            <div className='right-profile'>
                <div className='profile-contact'>
                    <div className='profile-name'>
                        <h3>Nikola Jovanović</h3>
                        <div className='profile-name-location'>
                            <p>✈️ &nbsp;&nbsp; Pirot, Srbija</p>
                        </div>
                    </div>
                    <div className='profile-contacts-cont'>
                        <a href='#aaa' className='card-button'>Send Message</a>
                    </div>
                </div>

                <div className='profile-information'>
                    <div className='profile-information-names-cont'>
                        {
                            Object.keys(information).map((key) => (
                                <ProjectsMenu name={key} onSelect={setCategory} />
                            ))
                        }
                    </div>

                    <div className='selected-profile-information'>
                        {
                            selectedCategory === 'Timeline'
                                ?
                                <div className='selected-information-cont'>
                                    {
                                        Object.keys(information['Timeline']).map((key) => (
                                            <div className='timeline-information' key={key}>
                                                <div className='information-name-cont'>
                                                    <p className='information-name'>{key}</p>
                                                </div>
                                                <div className='information-value-cont'>
                                                    <p className='information-value'>{information['Timeline'][key]}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                <div className='selected-information-cont'>
                                    {
                                        Object.keys(information['About']).map((category) => (
                                            <div className='about-information-cont' key={category}>
                                                <div className='about-category-cont'>
                                                    <h3 className='about-category-name'>{category}</h3>
                                                    {
                                                        Object.keys(information['About'][category]).map((key) => (
                                                            <div className='about-information' key={key}>
                                                                <div className='information-name-cont'>
                                                                    <p className='information-name'>{key}</p>
                                                                </div>
                                                                <div className='information-value-cont'>
                                                                    <p className='information-value'>{information['About'][category][key]}</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
