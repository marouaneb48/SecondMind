export const getTypeStyle = (type) => {
    const styles = {
        introduction: { bg: 'bg-blue-50', border: 'border-blue-200', icon: '📚' },
        empirical: { bg: 'bg-purple-50', border: 'border-purple-200', icon: '📊' },
        connection: { bg: 'bg-green-50', border: 'border-green-200', icon: '🔗' },
        literature: { bg: 'bg-amber-50', border: 'border-amber-200', icon: '📖' },
        question: { bg: 'bg-orange-50', border: 'border-orange-200', icon: '❓' },
        methodology: { bg: 'bg-teal-50', border: 'border-teal-200', icon: '⚙️' },
        counterargument: { bg: 'bg-red-50', border: 'border-red-200', icon: '⚖️' },
        synthesis: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: '💡' },
    };
    return styles[type] || styles.introduction;
};
