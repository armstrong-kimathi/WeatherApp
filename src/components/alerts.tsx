import React,{FC} from 'react';

interface AlertsProps{
    message: string;
    onClose:()=> void;
}

const Alert: FC<AlertsProps> = ({message, onClose}) => {
    return (
        <div className='modal is-acive has-text-centered'>
            <div className='modal-background' onClick={onClose}></div>
            <div className='modal-card'>
                <header className='modal-card-head has-background-danger'>
                    <p className='modal-card-title has-text-white'>{message}</p>
                </header>
                <footer className='modal-card-foot' style={{justifyContent: 'center'}}>
                    <button className='button is-danger' onClick={onClose}>Close</button>
                </footer>
                </div>

        </div>
    );
}

export default Alert;