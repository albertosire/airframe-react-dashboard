import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const getDocument = () =>
    typeof document === 'undefined'
        ? { querySelector() { return null; } }
        : document;

const resolveDomNode = (element) => {
    if (!element) {
        return null;
    }

    if (element instanceof HTMLElement) {
        return element;
    }

    return element.current || null;
};

class OuterClick extends React.Component {
    static propTypes = {
        onClickOutside: PropTypes.func,
        children: PropTypes.node,
        excludedElements: PropTypes.array,
        active: PropTypes.bool,
    };

    static defaultProps = {
        onClickOutside: () => {},
        excludedElements: [],
        active: true,
    };

    componentDidMount() {
        this.rootElement = getDocument().querySelector('body');

        if (this.rootElement) {
            this.rootElement.addEventListener('click', this.handleDocumentClick);
            this.rootElement.addEventListener('touchstart', this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        if (this.rootElement) {
            this.rootElement.removeEventListener('click', this.handleDocumentClick);
            this.rootElement.removeEventListener('touchstart', this.handleDocumentClick);
        }
    }

    assignRef(elementRef) {
        this.elementRef = elementRef;
    }

    handleDocumentClick = (evt) => {
        if (!this.props.active) {
            return;
        }

        const domElement = resolveDomNode(this.elementRef);
        if (!domElement) {
            return;
        }

        const isExcluded = _.some(this.props.excludedElements, (element) => {
            const excludedNode = resolveDomNode(element);
            return excludedNode && excludedNode.contains(evt.target);
        });

        if (!isExcluded && !domElement.contains(evt.target)) {
            this.props.onClickOutside(evt);
        }
    };

    render() {
        const onlyChild = React.Children.only(this.props.children);
        const updatedChild = React.isValidElement(onlyChild)
            ? React.cloneElement(onlyChild, { ref: this.assignRef.bind(this) })
            : onlyChild;

        return updatedChild;
    }
}

export { OuterClick };
