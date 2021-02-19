import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Cardstandard = ({link,image,info,name}) => {
    return (
        <Link href = {`/${link}/[name]`} as = {`/${link}/${info}`}>
            <a>
                <div className= {styles.card}>
                    <img src={image}></img>
                    <p>{name}</p>
                </div>
            </a>
        </Link>
    )
}

export default Cardstandard