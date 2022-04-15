import React from 'react'
import { FollowUs } from '../FollowUs'
import Modal from '@mui/material/Modal';
import { Box } from '@material-ui/core';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     // width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 1,
// };


export const FirstModal = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    // aria-labelledby="modal-modal-title"
                    // aria-describedby="modal-modal-description"
                    className='snackbar-wallet-connected'
                >
                    {/* <Box sx={style}> */}
                    <div className='first-modal'>
                        <div>
                            <div className='svg-in-modal' onClick={handleClose}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4L4 20M20 20L4 4L20 20Z" stroke="black" stroke-width="3" stroke-linecap="round" />
                                </svg>
                            </div>
                            <h1>Lottery!!!</h1>
                            <h2>Chance to win 10K Tokens</h2>
                            <p>At the token generation event, for every 10K followers, we will select a winner.</p>
                            <p>To participate:</p>
                            <ul>
                                <li>Follow us on Twitter.</li>
                                <li>Like, retweet the pinned welcome twitter post. </li>
                                <li>Tag at least 10 friends in the comment.</li>
                                <li>Follow our Telegram chat group.</li>
                                <li>Follow our Telegram Announcement Channel.</li>
                            </ul>
                            <h3>
                                <p>Soon, we will announce the pre-sale date.</p>
                                For the latest updates, please click the icons and join us on Twitter and Telegram:
                            </h3>
                            <div className='pre-sale-notice-follow-icons'>
                                <a href="https://twitter.com/TheBullsPad" target="_blank" rel="noopener noreferrer">
                                    <svg className='join-us-svg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7887 28C8.55374 28 5.53817 27.0591 3 25.4356C5.15499 25.5751 8.95807 25.2411 11.3236 22.9848C7.76508 22.8215 6.16026 20.0923 5.95094 18.926C6.25329 19.0426 7.6953 19.1826 8.50934 18.856C4.4159 17.8296 3.78793 14.2373 3.92748 13.141C4.695 13.6775 5.99745 13.8641 6.50913 13.8174C2.69479 11.0882 4.06703 6.98276 4.74151 6.09635C7.47882 9.88867 11.5812 12.0186 16.6564 12.137C16.5607 11.7174 16.5102 11.2804 16.5102 10.8316C16.5102 7.61092 19.1134 5 22.3247 5C24.0025 5 25.5144 5.71275 26.5757 6.85284C27.6969 6.59011 29.3843 5.97507 30.2092 5.4432C29.7934 6.93611 28.4989 8.18149 27.7159 8.64308C27.7224 8.65878 27.7095 8.62731 27.7159 8.64308C28.4037 8.53904 30.2648 8.18137 31 7.68256C30.6364 8.52125 29.264 9.91573 28.1377 10.6964C28.3473 19.9381 21.2765 28 11.7887 28Z" fill="#47ACDF" />
                                    </svg>
                                </a>
                                <a href="https://t.me/thebullspad" target="_blank" rel="noopener noreferrer">
                                    <svg className="join-us-svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_1_13647)" />
                                        <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1_13647" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#37BBFE" />
                                                <stop offset="1" stopColor="#007DBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* </Box> */}

                </Modal>
            </div>


        </>

    )
}
