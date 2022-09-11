import { Dialog } from "@headlessui/react";
import React from "react";

export function Modal({ isOpen, onClose, title, description, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-3 overflow-y-auto "
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            {title}
          </Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <div className="my-4">
            <p className="text-sm text-gray-500">{children}</p>
          </div>

          <div className="mt-4 flex-end">
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-2"
              onClick={onClose}
            >
              Deactivate
            </button>
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
