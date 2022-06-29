import React from 'react'
import { Helmet } from 'react-helmet'

const MetaHeader = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

MetaHeader.defaultProps = {
    title: 'Welcome To ProShop',
    description: 'We sell the best products for cheap',
    keywords: 'electronics, buy electronics, cheap electroincs',
}

export default MetaHeader