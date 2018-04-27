import '../scss/verysmalltoast.scss';

const toastContainerId = 'vsToastContainer';
const toastClass = 'vsToast';

let toastContainer = null;

/**
 * Either Create the toast container
 * or use one already in the DOM 
 */
if (!document.querySelector(`#${toastContainerId}`)) {
  toastContainer = document.createElement('div');
  toastContainer.id = toastContainerId;
} else {
  toastContainer = document.querySelector(`#${toastContainerId}`);
}

document.body.appendChild(toastContainer);

window.$vsToast = text => {
  // Create the toast
  let toast = document.createElement('div');
  toast.classList.add(toastClass);
  let toastText = document.createElement('span');
  toastText.innerHTML = text;
  toast.appendChild(toastText);

  // remove the last toast if it's there
  if (toastContainer.childNodes[0])
    toastContainer.removeChild(toastContainer.childNodes[0]);

  // add the new toast
  toastContainer.appendChild(toast);
}