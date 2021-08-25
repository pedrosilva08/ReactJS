import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
/*
const ModalBackground = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:90;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const ModalArea = styled.div`
    background-color:#fff;
    padding:20px;
`;

function Modal(props) {

    function handleBackgroundClick() {
      props.setVisible(false); 
    }
    return (
        <>
        {props.visible &&
            <ModalBackground onClick={handleBackgroundClick}>
                <ModalArea>
                    {props.children}
                </ModalArea>
            </ModalBackground>
        }
        </>
    )
}

export default Modal;
*/
const ModalBackground = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:90;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const ModalArea = styled.div`
    background-color:#fff;
    padding:20px;
`;

function Modal(props) {
    function handleBackgroundClick(){
        props.setVisible(false)
    }
    
    return (
        <>
            {props.visible &&
            <ModalBackground onClick={handleBackgroundClick}>
                <ModalArea>
                    {props.children}
                </ModalArea>
            </ModalBackground>
            }
        </>
    
    )
}

export default Modal;