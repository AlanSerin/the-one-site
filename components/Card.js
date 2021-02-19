import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Card = ({image,info}) => {
    return (
        <Link href = '/character/[name]' as = {`/character/${info}`}>
            <a>
                <div className= {styles.card}>
                    <img src={image}></img>
                    <p>{info}</p>
                </div>
            </a>
        </Link>
    )
}

export default Card
