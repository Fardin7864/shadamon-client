"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const LocationTable = () => {
  const [locations, setLocations] = useState([]);
  const [render, setRender] = useState(1);
  const [editLocationId, setEditLocationId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [editedLocation, setEditedLocation] = useState({
    location: "",
    sublocation: "",
    order: "",
    status: "",
    entrydate: "",
    createdby: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://shadamon.up.railway.app/api/v1/locations");
        setLocations(res.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading locations:", error);
      }
    };
    fetchData();
  }, [render]);

  const handleDelete = async (id) => {
    const removeLocation = async () => { 
      try {
        await axios.delete(`https://shadamon.up.railway.app/api/v1/locations/${id}`);
        setRender(render + 1);
      } catch (error) {
        console.error("Error deleting location:", error);
      }
    };

    // Delete confirmation dialog using SweetAlert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        removeLocation();
        Swal.fire({
          title: "Deleted!",
          text: "Your location has been deleted.",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your location is safe :)",
          icon: "error",
        });
      }
    });
  };

  const handleUpdate = async (id) => {
    // console.log(id)
    setEditLocationId(id);
    try {
      const response = await axios.get(`https://shadamon.up.railway.app/api/v1/locations?id=${id}`);
      const locationData = response.data?.data[0];
      // console.log(locationData)
      setEditedLocation({
        location: locationData?.location,
        sublocation: locationData?.sublocation,
        order: locationData?.order,
        status: locationData?.status,
        entrydate: locationData?.entrydate,
        createdby: locationData?.createdby
      });
    } catch (error) {
      console.error("Error fetching location data for editing:", error);
    }
  };

  // console.log(editedLocation)

  const handleSaveUpdate = async (id) => { 
    try {
      await axios.patch(`https://shadamon.up.railway.app/api/v1/locations/update/${id}`, editedLocation);
      setEditLocationId(null);
      setRender(render + 1);
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value
    }));
  };

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-4 ">
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
          <div className="skeleton h-10 w-full"></div>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Sublocation</th>
              <th>Order</th>
              <th>Status</th>
              <th>Entry Date</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations?.map((location) => (
              <tr key={location._id}>
                <td>
                  {editLocationId === location._id ? (
                    <input
                      name="location"
                      type="text"
                      value={editedLocation.location}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    <p>{location.location}</p>
                  )}
                </td>
                <td>
                  {editLocationId === location._id ? (
                    <input
                      name="sublocation"
                      type="text"
                      value={editedLocation.sublocation}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    <p>{location.sublocation}</p>
                  )}
                </td>
                <td>
                  {editLocationId === location._id ? (
                    <input
                      name="order"
                      type="text"
                      value={editedLocation.order}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    <p>{location.order}</p>
                  )}
                </td>
                <td>
                  {editLocationId === location._id ? (
                    <input
                      name="status"
                      type="text"
                      value={editedLocation.status}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    <p>{location.status}</p>
                  )}
                </td>
                <td>
                  {editLocationId === location._id ? (
                    <input
                      name="entrydate"
                      type="text"
                      value={editedLocation.entrydate}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    <p>{location.entrydate}</p>
                  )}
                </td>
                <td>
                  {editLocationId === location._id ? (
                    <input
                      name="createdby"
                      type="text"
                      value={editedLocation.createdby}
                      onChange={handleChange}
                      className="border p-2"
                    />
                  ) : (
                    <p>{location.createdby}</p>
                  )}
                </td>
                <td>
                  {editLocationId === location._id ? (
                    <button
                      onClick={() => handleSaveUpdate(location._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdate(location._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(location._id)}
                    className="btn btn-ghost btn-xs text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default LocationTable;
