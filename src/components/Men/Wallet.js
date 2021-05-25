import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchData, walletSector } from '../../features/fetchWallet/fetchWallet';
import Card from '../itemsCard/Card';

const Wallet = () => {

    const dispatch = useDispatch();
    const { wallet, loading, hasError } = useSelector(walletSector);

    // Error handling & map successfull query data
    const renderData = () => {
        if (loading) return <p>Loading...</p>
        if (hasError) return <p>Something when worong</p>

        return wallet.map((item, index) => {
            return (
                <Card item={item} />
            )
        })
    }

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    return (
        <div className="container mx-auto px-5">
            <div className="grid-container">
                {renderData()}
            </div>

        </div>
    );
};

export default Wallet;