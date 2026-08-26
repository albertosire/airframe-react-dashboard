import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();

        return (
            <Component
                {...props}
                location={location}
                navigate={navigate}
                params={params}
                history={{
                    push: navigate,
                    replace: (path) => navigate(path, { replace: true }),
                    goBack: () => navigate(-1),
                }}
            />
        );
    }

    ComponentWithRouterProp.displayName = `withRouter(${Component.displayName || Component.name || 'Component'})`;

    return ComponentWithRouterProp;
}
