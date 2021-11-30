import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
    return (
        <>
            <li>{JSON.stringify(user)}</li>
        </>
    );
};

UserItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

export default UserItem;
