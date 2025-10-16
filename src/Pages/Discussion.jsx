import React from 'react'
import DiscussionsHeader from '../Components/Discussions/ComponentDiscussion'

function Discussion() {
  const handleCreate = (payload) => {
    // ici dispatch action Redux ou POST API
    console.log("create discussion", payload);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <DiscussionsHeader onCreate={handleCreate} />
      {/* list of discussions below */}
      <div className="mt-6 space-y-4">
        {/* map over discussions */}
      </div>
    </div>
  );
}

export default Discussion