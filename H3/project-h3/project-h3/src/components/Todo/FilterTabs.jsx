import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function FilterTabs({ currentFilter }) {
    const location = useLocation();
    const filters = [
        { key: 'all', label: 'All', path: '/todos' },
        { key: 'active', label: 'Active', path: '/todos?filter=active' },
        { key: 'completed', label: 'Completed', path: '/todos?filter=completed' }
    ];
    return (
        <div className="filter-tabs">
            {filters.map(filter => (
                <Link
                    key={filter.key}
                    to={filter.path}
                    className={`filter-tab ${currentFilter === filter.key ? 'active' : ''}`}
                >
                    {filter.label}
                </Link>
            ))}
        </div>
    );
}
export default FilterTabs;