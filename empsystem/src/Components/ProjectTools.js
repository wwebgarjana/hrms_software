import React from 'react';
import './ProjectTools.css';

function ProjectTools() {
  const tools = [
    {
      name: 'Slack',
      purpose: 'Team Communication',
      link: 'https://slack.com'
    },
    {
      name: 'GitHub',
      purpose: 'Code Collaboration & Version Control',
      link: 'https://github.com'
    },
    {
      name: 'Trello',
      purpose: 'Task Management with Kanban Boards',
      link: 'https://trello.com'
    },
    {
      name: 'Google Drive',
      purpose: 'Document Sharing and Cloud Storage',
      link: 'https://drive.google.com'
    },
    {
      name: 'Figma',
      purpose: 'UI Design and Team Prototyping',
      link: 'https://figma.com'
    }
  ];

  return (
    <div className="project-tools">
      <h2>Project Collaboration Tools</h2>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Purpose</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr key={index}>
              <td>{tool.name}</td>
              <td>{tool.purpose}</td>
              <td>
                <a href={tool.link} target="_blank" rel="noreferrer">
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTools;