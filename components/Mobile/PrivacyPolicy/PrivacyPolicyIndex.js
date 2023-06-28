import React from 'react'
import Header from '../../Header/Header'
import styles from './DeleteAccount.module.css'
import Layer1 from './Layer1'
import PrivacyPolicyPage from './PrivacyPolicyPage'

const PrivacyPolicyIndex = () => {
    return (
        <div>
            <Header effect={true} />
            <section className={styles.container}>
                <Layer1 mobileAppAccountDeletion={true} />
            </section>
            <PrivacyPolicyPage />
        </div>
    )
}

export default PrivacyPolicyIndex