// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledLink = styled(Link)<{ active: boolean }>`
//    color: ${(props) =>
//       props.active ? props.theme.colors.primary : props.theme.colors.text};
//    border-bottom: ${(props) =>
//       props.active ? `2px solid ${props.theme.colors.primary} ` : `0px`};
//    text-decoration: none;
//    &:hover {
//       border-bottom: ${(props) => `1px solid ${props.theme.colors.primary} `};
//    }
//    padding: 1em;
//    font-size: 1.1em;
//    white-space: nowrap;
// `;

// interface Props {
//    label: string;
//    route: string;
// }

// export default function TabLink({ label, route }: Props) {
//    const location = useLocation();
//    const activeRoute = location.pathname;
//    const isActive = activeRoute == route;
//    return (
//       <StyledLink active={isActive} to={route}>
//          {label}
//       </StyledLink>
//    );
// }
