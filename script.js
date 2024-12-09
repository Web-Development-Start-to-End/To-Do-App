let categories = [
  {
    title: "Personal",
    img: "boy.png",
  },
  {
    title: "Work",
    img: "briefcase.png",
  },
  {
    title: "Shopping",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Health",
    img: "healthcare.png",
  },
  {
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    title: "Education",
    img: "education.png",
  },
  {
    title: "Finance",
    img: "saving.png",
  },
];

let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    completed: false,
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
  },
  {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    completed: false,
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    completed: false,
  },
  {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    completed: false,
  },
  {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
  },
  // Additional tasks for each category
  {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    completed: false,
  },
  {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    completed: false,
  },
  {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 20,
    task: "Debug a software issue",
    category: "Coding",
    completed: false,
  },
  {
    id: 21,
    task: "Try a new recipe for lunch",
    category: "Health",
    completed: false,
  },
  {
    id: 22,
    task: "Go for a run",
    category: "Fitness",
    completed: false,
  },
  {
    id: 23,
    task: "Learn a new language online",
    category: "Education",
    completed: false,
  },
  {
    id: 24,
    task: "Read about history",
    category: "Education",
    completed: false,
  },
  {
    id: 25,
    task: "Review investment portfolio",
    category: "Finance",
    completed: false,
  },
  // Add more tasks for each category as desired
];

// Define functions
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
  if (tasksLocal) {
    tasks = tasksLocal;
  }
};

const toggleScreen = () => {
  screenWrapper.classList.toggle("show-category");
};

const updateTotals = () => {
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  numTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      screenWrapper.classList.toggle("show-category");
      selectedCategory = category;
      updateTotals();
      categoryTitle.innerHTML = category.title;
      categoryImg.src = `images/${category.img}`;
      renderTasks();
    });

    div.innerHTML = `
                  <div class="left">
                <img src="images/${category.img}"
                 alt="${category.title}"
                  />
                <div class="content">
                  <h1>${category.title}</h1>
                  <p>${categoryTasks.length} Tasks</p>
                </div>
              </div>
              <div class="options">
                <div class="toggle-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
              </div>
    `;

    categoriesContainer.appendChild(div);
  });
};

const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
  } else {
    categoryTasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("task-wrapper");
      const label = document.createElement("label");
      label.classList.add("task");
      label.setAttribute("for", task.id);
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = task.id;
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks[index].completed = !tasks[index].completed;
        saveLocal();
      });
      div.innerHTML = `
      <div class="delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              `;
      label.innerHTML = `
              <span class="checkmark"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <p>${task.task}</p>
        `;
      label.prepend(checkbox);
      div.prepend(label);
      tasksContainer.appendChild(div);

      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const index = tasks.findIndex((t) => t.id === task.id);
        tasks.splice(index, 1);
        saveLocal();
        renderTasks();
      });
    });

    renderCategories();
    updateTotals();
  }
};

const toggleAddTaskForm = () => {
  addTaskWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
};

const addTask = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const category = categorySelect.value;

  if (task === "") {
    alert("Please enter a task");
  } else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category,
      completed: false,
    };
    taskInput.value = "";
    tasks.push(newTask);
    saveLocal();
    toggleAddTaskForm();
    renderTasks();
  }
};

// Initialize variables and DOM elements
let selectedCategory = categories[0];
const categoriesContainer = document.querySelector(".categories");
const screenWrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
const tasksContainer = document.querySelector(".tasks");
const numTasks = document.getElementById("num-tasks");
const categoryTitle = document.getElementById("category-title");
const categoryImg = document.getElementById("category-img");
const categorySelect = document.getElementById("category-select");
const addTaskWrapper = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.getElementById("task-input");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const totalTasks = document.getElementById("total-tasks");

// Attach event listeners
menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);
addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);
addBtn.addEventListener("click", addTask);
cancelBtn.addEventListener("click", toggleAddTaskForm);

// Render initial state
getLocal();
renderTasks();
categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
});


document.querySelector(".material-symbols-outlined").addEventListener("click",()=>{
  document.querySelector(".dialogBox dialog").open = open;
})


document.querySelector(".cancelButton").addEventListener("click",()=>{
  document.querySelector(".dialogBox dialog").open = false;
})

document.querySelector(".submitButton").addEventListener("click",()=>{
  let value = document.querySelector(".dialogBox dialog input").value
  document.querySelector(".dialogBox dialog input").value = ""
  document.querySelector(".dialogBox dialog").open = false;

  if(value){
    document.querySelector(".userName h1").innerHTML = value
  }
})

document.querySelector("#changeProfileBTN").addEventListener("click",function (e) {

document.querySelector(".inputProfileImage").click()
})


// Event listener for the file input change event
document.querySelector(".inputProfileImage").addEventListener("change", function() {
  if (this.files.length > 0) {
    // If a file is selected
    const file = this.files[0];
    
    // Create a temporary URL for the file
    const objectURL = URL.createObjectURL(file);
    
    // Set the src of the image element to the temporary URL
    document.querySelector(".profileImage").src = objectURL;
  }
});



// Get references to both the login and signup overlays
const loginOverlay = document.getElementById('login-overlay');
const signupOverlay = document.getElementById('signup-overlay');

// Get references to the links for switching between dialogs
const toSignupLink = document.getElementById('to-signup');
const toLoginLink = document.getElementById('to-login');

// Show signup dialog and hide login dialog when "Sign Up" is clicked
toSignupLink.addEventListener('click', function() {
    loginOverlay.style.display = 'none'; // Hide login dialog
    signupOverlay.style.display = 'flex'; // Show signup dialog
});

// Show login dialog and hide signup dialog when "Login" is clicked
toLoginLink.addEventListener('click', function() {
    signupOverlay.style.display = 'none'; // Hide signup dialog
    loginOverlay.style.display = 'flex'; // Show login dialog
});

// Initially display the login dialog (default)
loginOverlay.style.display = 'flex';



// Get the login and signup form elements
const loginForm = loginOverlay.querySelector('form');
const signupForm = signupOverlay.querySelector('form');

// Get the input fields for username and password
const usernameInput = loginOverlay.querySelector('#username');
const passwordInput = loginOverlay.querySelector('#password');
const signupUsernameInput = signupOverlay.querySelector('#signup-username');
const signupPasswordInput = signupOverlay.querySelector('#signup-password');
const confirmPasswordInput = signupOverlay.querySelector('#confirm-password');

// Event listener for switching to signup dialog
toSignupLink.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
    signupOverlay.style.display = 'flex';
});

// Event listener for switching to login dialog
toLoginLink.addEventListener('click', () => {
    signupOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
});

// Handle the login form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the username and password are stored in localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            // Successfully logged in, assign the values and close the dialog
            const username = enteredUsername;
            const password = enteredPassword;
            console.log('Logged in as:', username);

            // Close the login dialog
            loginOverlay.style.display = 'none';
            document.querySelector(".userName h1").innerHTML = username
        } else {
            alert('Invalid username or password');
        }
    } else {
        // If no user data exists, handle it by creating a new user
        alert('No account found. Please sign up first.');
        loginOverlay.style.display = 'none';
        signupOverlay.style.display = 'flex';
    }
});

// Handle the signup form submission
document.querySelector(".signup").addEventListener('click', function (event) {
   
  event.preventDefault();
    const enteredSignupUsername = signupUsernameInput.value;
    const enteredSignupPassword = signupPasswordInput.value;
    const enteredConfirmPassword = confirmPasswordInput.value;

    // Check if passwords match
    if (enteredSignupPassword !== enteredConfirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Store username and password in localStorage
    localStorage.setItem('username', enteredSignupUsername);
    localStorage.setItem('password', enteredSignupPassword);

    // After successful signup, close the signup dialog
    signupOverlay.style.display = 'none';
    console.log('Account created for:', enteredSignupUsername);
    document.querySelector(".userName h1").innerHTML = enteredSignupUsername
});

// Initial check to display the appropriate dialog
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    // If user is already logged in, automatically close the login dialog
    loginOverlay.style.display = 'none';
    
    document.querySelector(".userName h1").innerHTML = localStorage.getItem('username')
} else {
    // If user is not logged in, show the login dialog
    loginOverlay.style.display = 'flex';
}
