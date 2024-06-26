import Styled from 'vue3-styled-components';
import {theme} from '../../config/theme/themeVariables';

const GridStyle = Styled.div`
    .ant-row .ant-col, .ant-row-flex .ant-col {
        height: 50px;
        background: ${theme['primary-color']};
        text-align: center;        
        margin-bottom: 15px;
        line-height: 50px;
        color: #ffff;
    }
    .ant-row .ant-col:nth-child(even), .ant-row-flex .ant-col:nth-child(even) {
        background: ${theme['primary-color']}95;
    }

    .ant-divider-inner-text {
        color: ${({theme}) => theme[theme.mainContent]['dark-text']};
    }
`;

const GridStyleGutter = Styled.div`
    .ant-row .ant-col .gutter-box {
        height: 50px;
        background: ${theme['primary-color']};
        text-align: center;        
        margin-bottom: 15px;
        line-height: 50px;
        color: #ffff;
    }    
`;

const GridStyleOffset = Styled.div`
    .ant-row .ant-col {
        height: 50px;
        background: ${theme['primary-color']};
        text-align: center;        
        margin-bottom: 15px;
        line-height: 50px;
        color: #ffff;
    }    
`;

export { GridStyle, GridStyleGutter, GridStyleOffset };
