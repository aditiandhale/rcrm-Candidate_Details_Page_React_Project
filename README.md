Project Documentation: Candidate Details Page 

Project Overview 

The project involved developing a Candidate Details Page for a recruitment agency web 
application based on a provided Figma wireframe. The goal was to create a responsive, 
interactive, and visually appealing UI while maintaining a clean and extensible codebase. 

Approach & Methodology 
1. UI Development - Designed the layout strictly based on the provided wireframe.
2. Focused on creating a clean and modern UI using HTML, Vanilla CSS, and React.
3. Implemented responsive design to ensure compatibility across devices. 
4. State Management - Used React Context API for global state management.
5. Stored candidate data in a mock API (JSON file) and fetched it to simulate real API calls. 
6. Edit Functionality - Developed an edit candidate details modal. - Implemented dynamic updates using context state instead of local component variables. - Ensured that changes are reflected immediately on the candidate details page. 
7. Icons & Styling - Integrated Boxicons for all icons used in the project.
8. Created reusable CSS classes and SCSS for better maintainability. 
Technologies Used - React.js (for UI and state management) - HTML5 (structure) - Vanilla CSS / SCSS (styling) - React Context API (state management) - Mock API (JSON) (data storage) - Boxicons (icons library)

Key Features Developed - 
Candidate Information Display
- Displays candidate personal, professional, and contact details.
- Edit Candidate Details 
- Modal-based edit form for updating candidate information.
- Responsive Design - Optimized for desktops, tablets, and mobile devices.
- Tab Navigation - Implemented tabs as per the wireframe for better content organization.
- Icon Integration - Used Boxicons for uniformity and a modern look.

Project Structure - 
  rcrm-candidate-details/
├── public/          # Static assets
├── src/
│   ├── components/  
│   ├── pages/       
│   ├── store/      
│   ├── styles/     
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md

Installation

Follow these steps to set up the project locally:

# Clone the repository
git clone https://github.com/aditiandhale/rcrm-Candidate_Details_Page_React_Project.git

# Navigate into the project directory
cd rcrm-candidate-details

# Install dependencies
npm install

# Start the development server
npm run dev

Usage

Open http://localhost:5175/ in your browser.

View and edit candidate details easily.



      
