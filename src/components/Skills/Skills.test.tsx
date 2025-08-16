import React from 'react';
import { render, screen } from '@testing-library/react';

const skillsData = [
    { name: 'Python', category: 'Languages & Scripting' },
    { name: 'AWS', category: 'Cloud & DevOps' },
    { name: 'Wireshark', category: 'Security Tools' },
    { name: 'Pandas', category: 'Data Analysis' },
    // ... other skills data would be here
];

// Skills Component
const Skills = () => {
    const categories = [...new Set(skillsData.map(skill => skill.category))];
    return (
        <div>
            <h2>Skills & Technologies</h2>
            {categories.map(category => (
                <div key={category}>
                    <h3>{category}</h3>
                    <div>
                        {skillsData.filter(skill => skill.category === category).map(skill => (
                            <div key={skill.name}>{skill.name}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

describe('Skills Component', () => {
    it('renders the main heading and all category subheadings', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: /skills & technologies/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /languages & scripting/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /cloud & devops/i })).toBeInTheDocument();
    });

    it('renders all the skill tags', () => {
        render(<Skills />);
        skillsData.forEach(skill => {
            expect(screen.getByText(skill.name)).toBeInTheDocument();
        });
    });
});