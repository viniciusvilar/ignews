import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import NextAuth from "next-auth"
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function getName() {
    const {data: session} = useSession()

    return session
}

export function SignInButton() {
    const {data: session} = useSession()

    //{session.user.name}
    
    return session ? (
        <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signOut()}
        >

            <FaGithub color='#04d361' />
            {session['session'].user.name}
            <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signIn('github')}
        >

            <FaGithub color='#eba417' />
            Sign In With Github
            
        </button>
    );
}