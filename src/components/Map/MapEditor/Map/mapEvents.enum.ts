export enum MapEvents {
  CREATE = 'pm:create', // Called when a shape is drawn/finished. Payload includes shape type and the drawn layer.
  REMOVE = 'pm:remove', // Fired when a layer is removed via Removal Mode. Payload includes the layer.
  EDIT = 'pm:edit', // Fired when a layer is edited. Payload includes the layer.
  DRAG_END = 'pm:dragend', // Fired when a layer is dragged. Payload includes the layer.
  UPDATE = 'pm:update', // Fired when Edit Mode is disabled and a layer is edited and its coordinates have changed.
  VERTEXTADDED = 'pm:vertexadded', // Called when a vertex is added to a path. Payload includes the vertex and the path.
  SNAPDRAG = 'pm:snapdrag', // Fired during a marker move/drag. Payload includes info about involved layers and snapping calculation.
  SNAP = 'pm:snap', // Fired when a vertex is snapped. Payload is the same as in snapdrag.
  UNSNAP = 'pm:unsnap', // Fired when a vertex is unsnapped. Payload is the same as in snapdrag.
  CENTERPLACED = 'pm:centerplaced', // Called when the center of a circle is placed/moved.
  CHANGE = 'pm:change', // Fired coordinates of the layer changed. Payload includes the layer.
  INTERSECT = 'pm:intersect', // When allowSelfIntersection: false, this event is fired as soon as a self-intersection is detected.
}
