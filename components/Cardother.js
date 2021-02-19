import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Cardother = ({link,image,info}) => {
    return (
        <Link href = {`/${link}/[name]`} as = {`/${link}/${info[1]}`}>
            <a>
                <div className= {styles.card}>
                    <img src={image}></img>
                    <p>{info[0]}</p>
                </div>
            </a>
        </Link>
    )
}

export default Cardother