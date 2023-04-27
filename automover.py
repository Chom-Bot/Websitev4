import os
import shutil
import time

source_folder = "pb/pb_data/storage"
dest_folder = "websitev5/public/blogimg"

while True:
    for root, dirs, files in os.walk(source_folder):
        for filename in files:
            if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
                source_file = os.path.join(root, filename)
                dest_file = os.path.join(dest_folder, filename)
                if not os.path.exists(dest_file):
                    shutil.copy(source_file, dest_file)
                    print(f"Copied {source_file} to {dest_file}")
    time.sleep(10)
