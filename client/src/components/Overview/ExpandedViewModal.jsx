import React from 'react';

const ExpandedViewModal = (props) => {
  return (
    //This line below sets the reference.
    <div className="expanded-view-overlay">
      <div className="expanded-view-modal">
        <div className="expanded-view-modal-header">
          <button type="button" onClick={props.toggleModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedViewModal;