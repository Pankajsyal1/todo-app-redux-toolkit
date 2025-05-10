import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen fixed inset-0 bg-white/85">
            <div>
                <div className="border-8 border-t-gray-500 border-green-500 w-16 h-16 rounded-full animate-spin"></div>
                <p className='mt-2 text-black'>Loading...</p>
            </div>
        </div>
    );
};

export default Spinner;
