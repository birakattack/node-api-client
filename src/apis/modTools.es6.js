import apiRequest from '../apiBase/apiRequest';

const remove = (apiOptions, fullname, spam) => {
  // Remove a link, comment, or modmail message.
  const body = {
    id: fullname,
    spam: spam
  };

  return apiRequest(apiOptions, 'POST', 'api/remove', { body, type: 'form' });
}

const approve = (apiOptions, fullname) => {
  // Approve a link or comment
  const body = { id: fullname };
  return apiRequest(apiOptions, 'POST', 'api/approve', { body, type: 'form' });
}

const markNSFW = (apiOptions, id) => {
  // Mark a link as NSFW
  const body = { id };
  return apiRequest(apiOptions, 'POST', 'api/marknsfw', { body, type: 'form' });
}

const unmarkNSFW = (apiOptions, id) => {
  // Unmark a link as NSFW
  const body = { id };
  return apiRequest(apiOptions, 'POST', 'api/unmarknsfw', { body, type: 'form' });
}

export default { remove, approve, markNSFW, unmarkNSFW }
