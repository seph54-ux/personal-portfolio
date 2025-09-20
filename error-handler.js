window.onerror = function(message, source, lineno, colno, error) {
    console.error('An error occurred:', message, 'at', source, 'line', lineno);
    // window.location.href = './error.html'; // Disabled for debugging
    return true; // Prevents the default browser error handling
  };
  