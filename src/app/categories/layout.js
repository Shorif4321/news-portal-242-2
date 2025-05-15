import CategoryList from '@/components/ui/CategoryList/CategoryList';
import React from 'react';

const CategoriesLayout = ({ children }) => {
    return (
        <div className="px-4 md:px-14 py-5">
            <div className="md:flex gap-5">
                <div className="md:w-1/3">
                    <CategoryList></CategoryList>
                </div>
                <div className="md:w-2/3">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CategoriesLayout;