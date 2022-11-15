import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { filterPriority, filterStatus, searchText } from '../../redux/actions';
import filterSlice from './FilterSlice';
import { useTranslation } from 'react-i18next';
import i18n from '../Translate';
import Nav from '../Nav/Nav';

const { Search } = Input;

export default function Filters() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [status, setStatus] = useState('All');
    const [inputSearch, setInputSearch] = useState('');
    const [priority, setPriority] = useState([]);
    const [language, setLanguage] = useState('en');

    const handleChageSearchText = (e) => {
        dispatch(filterSlice.actions.searchText(e.target.value));
        setInputSearch(e.target.value);
    };
    const handleTranslate = (value) => {
        i18n.changeLanguage(value);
        setLanguage(value);
    };
    const handleChangeFilterStatus = (e) => {
        setStatus(e.target.value);
        dispatch(filterSlice.actions.filterStatus(e.target.value));
    };
    const handlChangeFilterPriority = (value) => {
        setPriority(value);
        dispatch(filterSlice.actions.filterPriority(value));
    };
    
    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: 'bold',
                        marginBottom: 3,
                        marginTop: 10,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItem: 'center',
                    }}
                >
                    {t('Search')}
                    <div
                        style={{
                            width: '30%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItem: 'center',
                        }}
                    >
                       <Nav/>
                        <Select onChange={handleTranslate} value={language}>
                            <Select.Option value="vn" label={t('Tiếng Việt')}>
                                <Tag color="green">{t('Tiếng Việt')}</Tag>
                            </Select.Option>
                            <Select.Option value="en" label={t('English')}>
                                <Tag color="green">{t('English')}</Tag>
                            </Select.Option>
                        </Select>
                    </div>
                </Typography.Paragraph>
                <Search
                    placeholder={t('input search text')}
                    value={inputSearch}
                    onChange={handleChageSearchText}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    {t('Filter By Status')}
                </Typography.Paragraph>
                <Radio.Group value={status} onChange={handleChangeFilterStatus}>
                    <Radio value="All">{t('All')}</Radio>
                    <Radio value="Completed">{t('Completed')}</Radio>
                    <Radio value="Todo">{t('To do')}</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    {t('Filter By Priority')}
                </Typography.Paragraph>
                <Select
                    onChange={handlChangeFilterPriority}
                    mode="multiple"
                    allowClear
                    placeholder={t('Please select')}
                    style={{ width: '100%' }}
                    value={priority}
                >
                    <Select.Option value="High" label={t('High')}>
                        <Tag color="red">{t('High')}</Tag>
                    </Select.Option>
                    <Select.Option value="Medium" label={t('Medium')}>
                        <Tag color="blue">{t('Medium')}</Tag>
                    </Select.Option>
                    <Select.Option value="Low" label={t('Low')}>
                        <Tag color="gray">{t('Low')}</Tag>
                    </Select.Option>
                </Select>
            </Col>
        </Row>
    );
}
