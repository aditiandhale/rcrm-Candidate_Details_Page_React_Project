import React, { useState } from "react";
import { Candidate } from "../types";
import { useCandidate } from "../store/CandidateContext";
import "../styles/EditModal.scss";

const EditModal: React.FC<{ onClose: () => void; initial: Candidate }> = ({
  onClose,
  initial,
}) => {
  const { update } = useCandidate();
  const [form, setForm] = useState<Partial<Candidate>>(initial);
  const [saving, setSaving] = useState(false);

  const handleChange =
    (k: keyof Candidate) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((s) => ({ ...s, [k]: e.target.value }));
    };

  const save = async () => {
    setSaving(true);
    await update(form);
    setSaving(false);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-header">Edit Candidate Details</h3>

        <table className="modal-table">
          <tbody>
            {[
              ["Name", "name"],
              ["Title", "title"],
              ["Location", "location"],
              ["Email", "email"],
              ["Phone", "phone"],
              ["Current Organization", "currentOrganization"],
              ["Available From", "availableFrom"],
              ["Full Address", "fullAddress"],
              ["Skills", "skills"],
              ["Summary", "summary"],
              ["Current Employment Status", "currentEmploymentStatus"],
              ["Date of Birth", "dateOfBirth"],
              ["Relevant Experience", "relevantExperience"],
              ["Total Experience", "totalExperience"],
              ["Current Salary", "currentSalary"],
              ["Salary Expectation", "salaryExpectation"],
              ["Salary Type", "salaryType"],
              ["Notice Period", "noticePeriod"],
              ["Resume", "resume"],
              ["Status", "status"],
              ["Language Skills", "languageSkills"],
            ].map(([label, key]) => (
              <tr key={key}>
                <td className="label">{label}:</td>
                <td
                  className={`input-cell ${
                    key === "fullAddress" ||
                    key === "summary" ||
                    key === "skills"
                      ? "full-width"
                      : ""
                  }`}
                >
                  {key === "skills" ? (
                    <input
                      value={form.skills?.join(", ") || ""}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          skills: e.target.value
                            .split(",")
                            .map((s) => s.trim()),
                        })
                      }
                    />
                  ) : key === "fullAddress" || key === "summary" ? (
                    <textarea
                      value={form[key as keyof Candidate] || ""}
                      onChange={handleChange(key as keyof Candidate)}
                      rows={2}
                    />
                  ) : (
                    <input
                      value={form[key as keyof Candidate] || ""}
                      onChange={handleChange(key as keyof Candidate)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal-actions">
          <button className="cancel" onClick={onClose} disabled={saving}>
            Cancel
          </button>
          <button className="save" onClick={save} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
