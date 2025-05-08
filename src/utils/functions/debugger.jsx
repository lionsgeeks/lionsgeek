// import { useEffect } from 'react';

// const PreventDevTools = () => {
//     // Prevent right-click (context menu)
//     const preventRightClick = (e) => {
//         e.preventDefault();
//         alert('Gotchu  !! What are you trying to do ?');
//     };

//     // Prevent common keyboard shortcuts
//     const handleKeyDown = (e) => {
//         const forbiddenKeys = [
//             'F12',
//             'I',
//             'C',
//             'J',
//             'U',
//             'Shift+I',
//             'Ctrl+Shift+I',
//             'Ctrl+Shift+J'
//         ];

//         if (
//             (e.key === 'F12') ||
//             (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
//             (e.metaKey && e.shiftKey && e.key === 'I')
//         ) {
//             e.preventDefault();
//             alert('Gotchu  !! What are you trying to do ?');
//         }
//     };

//     // Detect if dev tools are opened based on window size
//     const detectDevTools = () => {
//         const devToolsOpened = window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;

//         if (devToolsOpened) {
//             alert('Gotchu  !! What are you trying to do ?');
//         }
//     };

//     // Disable console methods
//     const disableConsoleMethods = () => {
//         if (typeof console !== 'undefined') {
//             console.log = function () { };
//             console.debug = function () { };
//             console.info = function () { };
//             console.warn = function () { };
//             console.error = function () { };
//         }
//     };

//     // Attach the event listeners
//     document.addEventListener('contextmenu', preventRightClick);
//     document.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('resize', detectDevTools);

//     // Disable console methods
//     disableConsoleMethods();

//     // Clean up the event listeners when the component is unmounted
//     return () => {
//         document.removeEventListener('contextmenu', preventRightClick);
//         document.removeEventListener('keydown', handleKeyDown);
//         window.removeEventListener('resize', detectDevTools);
//     };


//     return null;
// };

// export default PreventDevTools;
