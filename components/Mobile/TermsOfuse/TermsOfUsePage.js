import React from 'react';
import styles from './termsOfUse.module.css'
import Link from 'next/link'

const TermsOfUsePage = () => {
    return (
        <div className={styles.termsContainer}>
            <h2 className={styles.h2}>Terms of Use</h2>
            <p className={styles.p}>
                Please read these terms of use carefully before using Truevine Family Mobile Application. By accessing and using the application, you agree to
                be bound by these terms and conditions.
            </p>

            <h3 className={styles.h3}>1. Acceptance of Terms</h3>
            <p className={styles.p}>
                By using the application, you acknowledge that you have read, understood,
                and agree to be bound by the terms and conditions set forth in this
                Agreement. If you do not agree to these terms, you must cease using the
                application immediately.
            </p>

            <h3>2. User Accounts and Privacy</h3>
            <p className={styles.p}>
                2.1 Registration: In order to access certain features of the application,
                you may be required to create a user account. You agree to provide accurate
                and complete information during the registration process and to keep your
                account information updated.
            </p>
            <p className={styles.p}>
                2.2 Account Security: You are responsible for maintaining the confidentiality
                of your account credentials (email and password) and are solely responsible
                for all activities that occur under your account. You agree to notify the
                Developer immediately of any unauthorized use of your account or any other
                breach of security.
            </p>
            <p className={styles.p}>
                2.3 Privacy: The collection, use, and disclosure of personal information
                provided by users are governed by the application{`'`}s Privacy Policy, which
                can be found <span style={{
                    color: '#3452eb',
                }}><Link href="/mobile_app/privacy_policy" passHref>Privacy Policy Page</Link>.</span> By using the
                application, you consent to the collection, use, and disclosure of your
                personal information as described in the Privacy Policy.
            </p>

            <h3>3. User Responsibilities</h3>
            <p className={styles.p}>
                3.1 Proper Use: You agree to use the application in compliance with all
                applicable laws, regulations, and this Agreement. You will not use the
                application for any unlawful or unauthorized purpose.
            </p>
            <p className={styles.p}>
                3.2 Data Accuracy: You are solely responsible for the accuracy, completeness,
                and legality of any data or information you provide through the application.
            </p>
            {/* <p className={styles.p}>
                3.3 Content Restrictions: You agree not to upload, post, or transmit any
                content that is defamatory, abusive, obscene, offensive, or violates any
                third-party rights.
            </p> */}

            <h3>4. Termination</h3>
            <p className={styles.p}>
                The Developer reserves the right to suspend, disable, or terminate your access
                to the application at any time, without prior notice, if you violate any provision
                of this Agreement or for any other reason deemed necessary.
            </p>

            <h3>5. Intellectual Property</h3>
            <p className={styles.p}>
                The application, including all content and intellectual property rights, is owned
                by the Developer or its licensors. You agree not to modify, copy, distribute,
                transmit, display, perform, reproduce, publish, license, create derivative works
                from, transfer, or sell any information, software, products, or services obtained
                from or through the application.
            </p>

            <h3>6. Disclaimer of Warranty</h3>
            <p className={styles.p}>
                The application is provided on an {`"`}as is{`"`} and {`"`}as available{`"`} basis, without
                warranties of any kind, either expressed or implied. The Developer does not
                warrant that the application will be error-free or uninterrupted, nor does it
                make any representations regarding the accuracy, reliability, or currency of
                the information or content provided through the application.
            </p>

            <h3>7. Limitation of Liability</h3>
            <p className={styles.p}>
                To the fullest extent permitted by applicable law, the Developer and its
                affiliates shall not be liable for any direct, indirect, incidental, special,
                consequential, or exemplary damages arising out of or in connection with the
                use or performance of the application, even if advised of the possibility of
                such damages.
            </p>

            <h3>8. Governing Law</h3>
            <p className={styles.p}>
                This Agreement shall be governed by and construed in accordance with Nigeria{`'`}s laws. Any legal action or proceeding arising out of or
                relating to this Agreement shall be exclusively brought in the courts of
                Nigeria.
            </p>

            <h3>9. Modifications to the Agreement</h3>
            <p className={styles.p}>
                The Developer reserves the right to modify or amend this Agreement at any time.
                Any changes will be effective upon posting the revised Agreement within the
                application. Your continued use of the application after any such changes
                constitutes your acceptance of the revised Agreement.
            </p>

            <br />
            <br />
            <p className={styles.p}>
                This document was last updated on 21st of June 2023.
            </p>
        </div>
    );
};

export default TermsOfUsePage;
