import React from 'react';
import { Typography, Divider } from 'antd';
import '.././App.css';
import TodoList from '.././components/TodoList';
import Filters from '.././components/Filters';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getData } from '.././components/TodoList/TodoSlice';
import i18n from '.././components/Translate';
import { useTranslation } from 'react-i18next';
const { Title } = Typography;

export const Home = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <div
            style={{
                width: 600,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                minHeight: '90vh',
            }}
        >
            <Title style={{ textAlign: 'center' }}>{t('TODO APP with REDUX')}</Title>
            <Filters />
            <Divider />
            <TodoList />
        </div>
    );
};
